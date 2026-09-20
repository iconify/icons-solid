import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuy4aefsy.css';
import '../../css/n/nq4nrmb_c.css';
import '../../css/n/nrjclnbmq.css';
import '../../css/s/syu6jl27a.css';
import '../../css/g/gkhe7qbis.css';
import '../../css/z/z5qox7thd.css';
import '../../css/d/di5meih6v.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="yuy4aefsy"/><path class="nq4nrmb_c"/><circle class="nrjclnbmq"/><path class="syu6jl27a"/><circle class="gkhe7qbis"/><path class="z5qox7thd"/><circle class="di5meih6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-fi"} {...others} />);
}

export default Component;
