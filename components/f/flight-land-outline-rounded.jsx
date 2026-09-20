import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lnr3kq5pn {
  fill: currentColor;
  d: path("M4 21q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zm14.55-5.05l-14.1-4q-.65-.2-1.05-.725t-.4-1.2V5.6q0-.5.4-.8t.9-.175l.575.15q.25.075.438.238t.262.412L6.6 8.4l3.45.975l-.7-6.775q-.075-.65.438-1.063t1.137-.212l.525.15q.275.075.488.288t.312.487l3 8.625l4.3 1.225q.625.2 1.038.725t.412 1.2q0 .875-.712 1.537t-1.738.388");
}
</style><path class="lnr3kq5pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flight-land-outline-rounded"} {...others} />);
}

export default Component;
