import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubq-_mz2b.css';
import '../../css/s/sbqm2wbdh.css';
import '../../css/e/eh56eccoo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubq-_mz2b"/><circle class="sbqm2wbdh"/><circle class="eh56eccoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bus"} {...others} />);
}

export default Component;
