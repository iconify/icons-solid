import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye7a0cc3i.css';
import '../../css/l/leeyffb0z.css';
import '../../css/f/f6ccjno1g.css';
import '../../css/m/mvlcevogs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye7a0cc3i"/><path class="leeyffb0z"/><circle class="f6ccjno1g"/><path class="mvlcevogs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cast"} {...others} />);
}

export default Component;
