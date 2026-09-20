import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcm44_rqe.css';
import '../../css/g/gh05_sajp.css';
import '../../css/o/o7mpebc-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xcm44_rqe"/><path class="gh05_sajp"/><path class="o7mpebc-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:shuffle-solid"} {...others} />);
}

export default Component;
