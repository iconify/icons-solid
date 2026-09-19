import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.skgal-bib {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M8 8h48v48H8z");
}
</style><path class="skgal-bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:white-medium-square"} {...others} />);
}

export default Component;
