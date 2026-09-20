import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asdda2o7p.css';
import '../../css/n/nqlsnkbno.css';
import '../../css/s/sg-3s7bbt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="asdda2o7p"/><path class="nqlsnkbno"/><path class="sg-3s7bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hugo"} {...others} />);
}

export default Component;
