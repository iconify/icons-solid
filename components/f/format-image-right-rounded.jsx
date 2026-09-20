import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hipr87mhf {
  fill: currentColor;
  d: path("M12 17q-.425 0-.712-.288T11 16V8q0-.425.288-.712T12 7h8q.425 0 .713.288T21 8v8q0 .425-.288.713T20 17zm-8 4q-.425 0-.712-.288T3 20t.288-.712T4 19h16q.425 0 .713.288T21 20t-.288.713T20 21zm0-4q-.425 0-.712-.288T3 16t.288-.712T4 15h4q.425 0 .713.288T9 16t-.288.713T8 17zm0-4q-.425 0-.712-.288T3 12t.288-.712T4 11h4q.425 0 .713.288T9 12t-.288.713T8 13zm0-4q-.425 0-.712-.288T3 8t.288-.712T4 7h4q.425 0 .713.288T9 8t-.288.713T8 9zm0-4q-.425 0-.712-.288T3 4t.288-.712T4 3h16q.425 0 .713.288T21 4t-.288.713T20 5z");
}
</style><path class="hipr87mhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-right-rounded"} {...others} />);
}

export default Component;
