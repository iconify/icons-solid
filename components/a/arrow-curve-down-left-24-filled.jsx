import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-opvqboi {
  fill: currentColor;
  d: path("M16.868 3.254a1 1 0 0 1-.372 1.364c-1.875 1.072-2.711 2.363-3.114 3.696c-.388 1.289-.386 2.643-.383 4.062l.001.374v5.086l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 17.836V12.75l-.001-.4c-.005-1.373-.011-3.023.469-4.614c.547-1.816 1.71-3.525 4.036-4.854a1 1 0 0 1 1.364.372");
}
</style><path class="s-opvqboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-curve-down-left-24-filled"} {...others} />);
}

export default Component;
