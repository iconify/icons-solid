import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q4wqug1if {
  fill: var(--svg-color--6b10d7, #6b10d7);
  d: path("M17.294 19.279a9 9 0 1 0-2.647 1.323v-4.018a5.294 5.294 0 1 1 2.647-4.585zm-5.295-4.633a2.648 2.648 0 1 0 0-5.295a2.648 2.648 0 0 0 0 5.295");
}
</style><path class="q4wqug1if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:quidd"} {...others} />);
}

export default Component;
