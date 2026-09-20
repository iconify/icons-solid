import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fcifpybem {
  fill: currentColor;
  d: path("M4.885 22.116v-4.232H7v-3.768H4.884V9.885H7v-3.77H4.884v-4.23h5.232v4.23H8v3.77h2.116V11.5h4.769V9.884h5.23v4.232h-5.23V12.5h-4.77v1.616H8v3.769h2.116v4.23z");
}
</style><path class="fcifpybem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:schema-sharp"} {...others} />);
}

export default Component;
