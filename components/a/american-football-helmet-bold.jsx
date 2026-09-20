import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnoop7bqe.css';
import '../../css/h/h_ao2xbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bnoop7bqe"/><path class="h_ao2xbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:american-football-helmet-bold"} {...others} />);
}

export default Component;
