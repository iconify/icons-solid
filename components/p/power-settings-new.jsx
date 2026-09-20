import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rzjzuacaw {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.788-3.912t2.137-3.163l1.4 1.4q-1.1 1.1-1.712 2.55T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.675-.612-3.125t-1.713-2.55l1.4-1.4q1.35 1.35 2.138 3.163T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-9V2h2v11z");
}
</style><path class="rzjzuacaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-settings-new"} {...others} />);
}

export default Component;
