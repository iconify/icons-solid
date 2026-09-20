import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xa1rtebhw {
  fill: currentColor;
  d: path("M5 19q-.846 0-1.423-.577T3 17t.577-1.423T5 15h14q.846 0 1.423.577T21 17t-.577 1.423T19 19zm0-1h14q.425 0 .713-.288T20 17t-.288-.712T19 16H5q-.425 0-.712.288T4 17t.288.713T5 18m5.962-5V5h8v8zm1-1h6V6h-6zM3 11.489v-.983h5.944v.983zM12.962 8.5h4v-.994h-4zM5 8.5h3.944v-.994H5zm6.962 3.5V6z");
}
</style><path class="xa1rtebhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:conveyor-belt-outline-sharp"} {...others} />);
}

export default Component;
