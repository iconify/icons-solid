import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.du5mn85ya {
  fill: currentColor;
  d: path("M8 20v-7H5.1q-.65 0-.912-.562t.137-1.063l6.9-8.425q.3-.375.775-.375t.775.375l6.9 8.425q.4.5.138 1.063T18.9 13H16v7q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20m2-1h4v-8h2.775L12 5.15L7.225 11H10zm2-8");
}
</style><path class="du5mn85ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift-outline-rounded"} {...others} />);
}

export default Component;
