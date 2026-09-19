import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.fb3_dhlcc {
  fill: currentColor;
  d: path("M12 12h40v40H12z");
}
</style><path class="fb3_dhlcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:black-medium-small-square"} {...others} />);
}

export default Component;
