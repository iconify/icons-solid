import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ej2zyqpde {
  fill: currentColor;
  d: path("m8 22l-4-4l4-4l1.425 1.4l-1.6 1.6h8.35L14.6 15.4L16 14l4 4l-4 4l-1.425-1.4l1.6-1.6h-8.35L9.4 20.6zM5 12V2h2v10zm6 0V2h2v10zm6 0V2h2v10z");
}
</style><path class="ej2zyqpde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-letter-spacing-sharp"} {...others} />);
}

export default Component;
