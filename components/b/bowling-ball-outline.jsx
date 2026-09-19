import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w84vznkgo.css';
import '../../css/a/a-1ejqbjh.css';
import '../../css/s/sbo79i6qt.css';
import '../../css/s/sj5f_cdsq.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w84vznkgo"/><circle class="a-1ejqbjh"/><circle class="sbo79i6qt"/><circle class="sj5f_cdsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bowling-ball-outline"} {...others} />);
}

export default Component;
