import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p888sqb4d {
  d: path("M17.226 3L12 15.774L6.774 3H4.452L12 21l7.55-18z");
}

.rs-8xcc2v {
  d: path("M12 9.715L14.903 3H9.097z");
}

.xt41kvbyw {
  fill: var(--svg-color--34bde2, #34bde2);
}
</style><g class="xt41kvbyw"><path class="p888sqb4d"/><path class="rs-8xcc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xvg"} {...others} />);
}

export default Component;
