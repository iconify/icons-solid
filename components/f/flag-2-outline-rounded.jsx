import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cu0l-zbug {
  fill: currentColor;
  d: path("M7 13v8q0 .425-.288.713T6 22t-.712-.288T5 21V4q0-.425.288-.712T6 3h13.525q.275 0 .488.125t.337.325t.162.438t-.062.487L19 8l1.45 3.625q.1.25.063.488t-.163.437t-.337.325t-.488.125zm0-2h11.05l-.9-2.25Q17 8.4 17 8t.15-.75l.9-2.25H7zm0 0V5z");
}
</style><path class="cu0l-zbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flag-2-outline-rounded"} {...others} />);
}

export default Component;
