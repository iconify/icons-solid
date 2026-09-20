import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.soxopw68y {
  fill: currentColor;
  d: path("M5.7 21q-.425 0-.7-.225t-.35-.65L2.025 3.9q-.05-.4.15-.65T2.75 3h18.5q.4 0 .6.25t.125.65l-.725 4.275q-.075.425-.337.65t-.688.225H9.075q-.075 0-.225.3l.875 5.35q0 .05.25.25H14q.1 0 .25-.25l.625-3.875q.05-.35.263-.512t.562-.163h4.375q.4 0 .6.25t.15.625l-1.475 9.1q-.075.425-.35.65t-.7.225z");
}
</style><path class="soxopw68y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bitbucket"} {...others} />);
}

export default Component;
