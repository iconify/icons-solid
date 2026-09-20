import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oqc298huz {
  fill: currentColor;
  d: path("M14.5 18.5q.625 0 1.063-.437T16 17t-.437-1.062T14.5 15.5t-1.062.438T13 17t.438 1.063t1.062.437m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zm.05-4.95q.625 0 1.063-.437T11 12t-.437-1.062T9.5 10.5t-1.062.438T8 12t.438 1.063T9.5 13.5M4 22V2h10l6 6v14zm9-13h5l-5-5z");
}
</style><path class="oqc298huz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:heap-snapshot-large-sharp"} {...others} />);
}

export default Component;
