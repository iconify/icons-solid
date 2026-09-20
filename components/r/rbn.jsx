import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rro3wk-zh {
  fill: var(--svg-color--e73558, #e73558);
  d: path("M12.003 21a9 9 0 1 0-8.415-5.8l8.55-8.263l5.49 5.305l-5.568 5.383l-.805-.776l4.765-4.607l-3.882-3.752l-8.055 7.785A9 9 0 0 0 12.003 21");
}
</style><path class="rro3wk-zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:rbn"} {...others} />);
}

export default Component;
