import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq44ds2pu.css';
import '../../css/b/b7nxp5bpe.css';
import '../../css/y/yho0_lb6o.css';
import '../../css/d/djwclpb4f.css';
import '../../css/g/gd662sbks.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="nq44ds2pu"/><path class="b7nxp5bpe"/><circle class="yho0_lb6o"/><path class="djwclpb4f"/><path class="gd662sbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:datastore"} {...others} />);
}

export default Component;
