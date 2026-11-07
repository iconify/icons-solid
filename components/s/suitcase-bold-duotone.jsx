import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m41mmzbsh.css';
import '../../css/a/a922yib7w.css';
import '../../css/u/ulfe3ccxn.css';
import '../../css/t/t99_mr0an.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m41mmzbsh"/><path class="a922yib7w"/><path class="ulfe3ccxn"/><path class="t99_mr0an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-bold-duotone"} {...others} />);
}

export default Component;
