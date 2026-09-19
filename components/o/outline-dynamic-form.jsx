import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk3jznbwq {
  fill: currentColor;
  d: path("M13 11H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h9zM4 9h7V6H4zm11 11H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h11zM4 18h9v-3H4zm18-9h-2l2-5h-7v7h2v9zM4.75 17.25h1.5v-1.5h-1.5zm0-9h1.5v-1.5h-1.5z");
}
</style><path class="nk3jznbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-dynamic-form"} {...others} />);
}

export default Component;
