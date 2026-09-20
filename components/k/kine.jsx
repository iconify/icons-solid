import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bba6be8ug {
  fill: var(--svg-color--12a8a7, #12a8a7);
  fill-rule: evenodd;
  d: path("M4.2 3h5.4v5.4H4.2zm0 12.6h5.4V21H4.2zM9 12l6-9h4.8l-5.7 9l5.7 9H15z");
}
</style><path clip-rule="evenodd" class="bba6be8ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:kine"} {...others} />);
}

export default Component;
