import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srar28bzr.css';
import '../../css/o/o2faufbyu.css';
import '../../css/n/nz3bqy2lz.css';
import '../../css/l/lylr0un_i.css';
import '../../css/y/y00pdnbdy.css';
import '../../css/p/phftq6btw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srar28bzr"/><path class="o2faufbyu"/><path class="nz3bqy2lz"/><path class="lylr0un_i"/><path class="y00pdnbdy"/><path class="phftq6btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:postgresql"} {...others} />);
}

export default Component;
