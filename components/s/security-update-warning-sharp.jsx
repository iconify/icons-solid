import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8-6_1bie {
  fill: currentColor;
  d: path("M12 17q-.425 0-.712-.288T11 16t.288-.712T12 15t.713.288T13 16t-.288.713T12 17m-1-4V7h2v6zM5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="g8-6_1bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:security-update-warning-sharp"} {...others} />);
}

export default Component;
