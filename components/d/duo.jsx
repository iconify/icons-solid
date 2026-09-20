import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u_cxvj3uv {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2h8q.825 0 1.413.588T22 4v8q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-5-7h7v-2l3 2V9l-3 2V9H7z");
}
</style><path class="u_cxvj3uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:duo"} {...others} />);
}

export default Component;
