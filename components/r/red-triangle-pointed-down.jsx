import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.s60d7nb_c {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M32 62L62 2H2z");
}
</style><path class="s60d7nb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:red-triangle-pointed-down"} {...others} />);
}

export default Component;
