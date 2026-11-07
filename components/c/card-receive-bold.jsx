import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0qlml8rw.css';
import '../../css/z/z_zrozxsx.css';
import '../../css/b/b43kj6_la.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t0qlml8rw"/><path class="z_zrozxsx"/><path clip-rule="evenodd" class="b43kj6_la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-receive-bold"} {...others} />);
}

export default Component;
