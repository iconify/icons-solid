import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suep8hb6m.css';
import '../../css/a/a04554amq.css';
import '../../css/t/txfp76hvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suep8hb6m wm-a"/><path class="a04554amq wm-k"/><path class="txfp76hvp wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bath"} {...others} />);
}

export default Component;
