import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ip-vaqbpl {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M1.061 19.062a1.506 1.506 0 0 1 0-2.122L16.94 1.061a1.506 1.506 0 0 1 2.122 0L34.94 16.94a1.505 1.505 0 0 1 0 2.121L19.062 34.939a1.506 1.506 0 0 1-2.122 0z");
}
</style><path class="ip-vaqbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:large-blue-diamond"} {...others} />);
}

export default Component;
