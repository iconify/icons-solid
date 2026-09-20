import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.puanyqbec {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M111.84 15.36H16.16c-1.24 0-2.24 1-2.24 2.24v17.99c0 1.24 1 2.24 2.24 2.24h34.65v80.73c0 1.24 1 2.24 2.24 2.24h21.9c1.24 0 2.24-1 2.24-2.24V37.83h34.65c1.24 0 2.24-1 2.24-2.24V17.6c0-1.24-1-2.24-2.24-2.24");
}
</style><path class="puanyqbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:letter-t"} {...others} />);
}

export default Component;
