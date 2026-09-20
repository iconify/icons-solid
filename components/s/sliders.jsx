import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejokxacfz {
  fill: currentColor;
  d: path("M5 14q-.846 0-1.423-.577T3 12t.577-1.423T5 10h14q.846 0 1.423.577T21 12t-.577 1.423T19 14zm9-1h5q.425 0 .713-.288T20 12t-.288-.712T19 11h-5z");
}
</style><path class="ejokxacfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sliders"} {...others} />);
}

export default Component;
