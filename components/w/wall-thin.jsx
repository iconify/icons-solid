import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.djn3yib7a {
  fill: currentColor;
  d: path("M224 52H32a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4M84 148v-40h88v40Zm-48 0v-40h40v40Zm144-40h40v40h-40Zm40-8h-88V60h88Zm-96-40v40H36V60Zm-88 96h88v40H36Zm96 40v-40h88v40Z");
}
</style><path class="djn3yib7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wall-thin"} {...others} />);
}

export default Component;
