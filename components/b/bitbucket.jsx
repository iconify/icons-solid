import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io988ibmp.css';
import '../../css/r/r02pwbbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="io988ibmp"/><path class="r02pwbbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bitbucket"} {...others} />);
}

export default Component;
