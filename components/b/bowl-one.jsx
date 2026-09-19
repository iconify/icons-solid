import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/y/yihstg8dq.css';
import '../../css/y/ygihsgtev.css';
import '../../css/x/xzm23acqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeKL45lVJ"><g class="hv130ab-t"><path class="yihstg8dq"/><path class="ygihsgtev"/><path class="xzm23acqn"/></g></mask></defs><path mask="url(#SVGeKL45lVJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bowl-one"} {...others} />);
}

export default Component;
