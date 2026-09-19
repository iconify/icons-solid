import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh-e5rbij.css';
import '../../css/u/ukvwsebuo.css';
import '../../css/f/fqc1dxbov.css';
import '../../css/s/sjog51b9q.css';
import '../../css/e/eydtdobnb.css';
import '../../css/v/v578stbtd.css';
import '../../css/n/nv_x6sbsv.css';
import '../../css/h/hgmvowbih.css';
import '../../css/n/n7was0i9d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jh-e5rbij"/><path class="ukvwsebuo"/><path class="fqc1dxbov"/><path class="sjog51b9q"/><path class="eydtdobnb"/><path class="v578stbtd"/><path class="nv_x6sbsv"/><path class="hgmvowbih"/><path class="n7was0i9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:centos"} {...others} />);
}

export default Component;
