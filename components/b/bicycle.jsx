import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqp3aj0tw.css';
import '../../css/w/wnedzub-m.css';
import '../../css/m/m8a_zlcko.css';
import '../../css/x/xpsm069hd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/xf645oivx.css';
import '../../css/n/n02kdacpf.css';
import '../../css/p/pvrshobql.css';
import '../../css/w/wwtkloxuo.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGRRXhvdAn" class="zqp3aj0tw"/></defs><path class="wnedzub-m"/><path class="m8a_zlcko"/><path class="xpsm069hd"/><use href="#SVGRRXhvdAn" class="jn8qy4bru"/><g class="n1mjunbsu"><circle class="xf645oivx"/><circle class="n02kdacpf"/><path class="pvrshobql"/></g><use href="#SVGRRXhvdAn" class="wwtkloxuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bicycle"} {...others} />);
}

export default Component;
