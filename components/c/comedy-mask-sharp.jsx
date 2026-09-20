import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi-31ccxg {
  fill: currentColor;
  d: path("M14.825 15.825Q16 14.65 16 13H8q0 1.65 1.175 2.825T12 17t2.825-1.175M12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13V2h18v11q0 1.875-.712 3.513t-1.925 2.85t-2.85 1.925T12 22M7 9h4q0-.825-.587-1.412T9 7t-1.412.588T7 9m6 0h4q0-.825-.587-1.412T15 7t-1.412.588T13 9");
}
</style><path class="bi-31ccxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comedy-mask-sharp"} {...others} />);
}

export default Component;
