import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sghek9bfu {
  fill: currentColor;
  d: path("M2 20V4h20v7h-7v9ZM6 8v6h2v-2.575l3.075 3.075l1.425-1.425L9.4 10H12V8Zm11 12v-7h5v7Z");
}
</style><path class="sghek9bfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unfloat-landscape-sharp"} {...others} />);
}

export default Component;
