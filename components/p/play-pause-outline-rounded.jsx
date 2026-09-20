import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgzuebbed {
  fill: currentColor;
  d: path("M6.767 14.35q-.403.292-.835.057t-.432-.728V10.32q0-.492.432-.727t.835.056l2.424 1.679q.347.244.347.672t-.347.67zm6.876 1.006Q13.5 15.213 13.5 15V9q0-.213.144-.356t.357-.144t.356.144T14.5 9v6q0 .213-.144.356t-.357.144t-.356-.144m4 0Q17.5 15.213 17.5 15V9q0-.213.144-.356t.357-.144t.356.144T18.5 9v6q0 .213-.144.356t-.357.144t-.356-.144");
}
</style><path class="pgzuebbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:play-pause-outline-rounded"} {...others} />);
}

export default Component;
