import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vojwx_bnb {
  fill: currentColor;
  d: path("M240 164a76 76 0 0 1-151.9 3.9a76 76 0 1 1 79.8-79.8A76.1 76.1 0 0 1 240 164");
}
</style><path class="vojwx_bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:unite-fill"} {...others} />);
}

export default Component;
