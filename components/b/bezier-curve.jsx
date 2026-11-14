import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zz-sd5cgw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.803 3.791Q17.131 1.75 19.5 1.75q2.75 0 2.75 2.75T19.5 7.25q-2.296 0-2.675-1.916q-2.657.677-4.095 6.836q-.899 3.856-1.749 5.356q-1.355 2.391-3.784 2.683Q6.869 22.25 4.5 22.25q-2.75 0-2.75-2.75t2.75-2.75q2.296 0 2.675 1.916q2.657-.677 4.095-6.836q.899-3.856 1.749-5.356q1.355-2.391 3.784-2.683");
}
</style><path class="zz-sd5cgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:bezier-curve"} {...others} />);
}

export default Component;
