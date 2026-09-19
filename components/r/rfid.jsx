import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk6ielbwq.css';
import '../../css/c/c7gfsbb7m.css';
import '../../css/a/a1orltb6z.css';
import '../../css/n/nok52yrop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk6ielbwq"/><circle class="c7gfsbb7m"/><path class="a1orltb6z"/><path class="nok52yrop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:rfid"} {...others} />);
}

export default Component;
