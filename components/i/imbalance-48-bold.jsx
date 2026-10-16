import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o26-z7b6y.css';
import '../../css/c/c4z6olb-l.css';
import '../../css/s/see0y-btr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o26-z7b6y"/><path class="c4z6olb-l"/><path class="see0y-btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:imbalance-48-bold"} {...others} />);
}

export default Component;
