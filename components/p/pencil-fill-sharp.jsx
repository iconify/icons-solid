import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xw57f5btw {
  fill: currentColor;
  d: path("M12.707 7.293L12 6.586l3.293-3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414L17.414 12Zm-9.414 8L10.586 8L16 13.414l-7.293 7.293A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4c0-.265.105-.52.293-.707");
}
</style><path class="xw57f5btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pencil-fill-sharp"} {...others} />);
}

export default Component;
