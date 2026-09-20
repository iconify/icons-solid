import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xaxang7xf {
  fill: currentColor;
  d: path("M4.577 9.616h14.846zM6.993 20v-4H3.577V8.616h16.846v2.807q-.238-.077-.488-.136t-.512-.077V9.616H4.577V15H7v-1.538h7.462q-.189.232-.35.473q-.162.24-.285.527H8V19h5.466q.078.28.203.521q.125.24.264.479zM16 8.616v-3H8v3H7v-4h10v4zm2.596 11.98v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="xaxang7xf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:print-add-outline-sharp"} {...others} />);
}

export default Component;
