import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gwg508b9f {
  fill: currentColor;
  d: path("M38.866 6.88a1.5 1.5 0 0 0-1.943-.764l-12 5a1.5 1.5 0 0 0 1.154 2.769l8.781-3.659l-11.822 28.137L10.893 7.944a1.5 1.5 0 1 0-2.786 1.112L20.702 40.61c.83 2.078 3.76 2.104 4.627.042l12.293-29.258l3.513 7.728a1.5 1.5 0 0 0 2.73-1.241z");
}
</style><path class="gwg508b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-down-up-48-filled"} {...others} />);
}

export default Component;
