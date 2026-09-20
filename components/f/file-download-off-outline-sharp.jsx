import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sj3r4bbwu {
  fill: currentColor;
  d: path("M19.833 21.26L17.573 19H5v-4.038h1V18h10.573l-3.498-3.498L12 15.577l-3.538-3.538l.517-.518l1.73 1.731v-1.115l-7.968-7.97l.713-.713l17.092 17.092zm-4.908-8.8l-.713-.714l.619-.619l.708.72zM12.5 9.688l-1-1V5h1zm6.5 6.846l-1-1v-.572h1z");
}
</style><path class="sj3r4bbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:file-download-off-outline-sharp"} {...others} />);
}

export default Component;
