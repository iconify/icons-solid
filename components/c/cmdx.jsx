import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axgkazrnq {
  fill: var(--svg-color--ff424e, #ff424e);
  d: path("M7.2 4.158V6.3h1.794V5.1h8.808l-1.938 1.8H3.852c-.48 0-.852.282-.852.756v12.18c0 .48.372.864.852.864H16.41l4.344-4.002c.51-.468.174-1.398-.528-1.398H8.994v-6h-1.8v6.948c0 .48.204.852.684.852H17.88l-2.034 1.8H4.8V8.7h11.61l4.344-4.08c.51-.468.174-1.32-.528-1.32H7.878c-.48 0-.684.384-.684.858z");
}
</style><path class="axgkazrnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:cmdx"} {...others} />);
}

export default Component;
