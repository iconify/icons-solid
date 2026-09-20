import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rewu6ohdz.css';
import '../../css/a/a3eg0vgxg.css';
import '../../css/j/jr9qsfbkg.css';
import '../../css/d/dmpeb_btt.css';
import '../../css/q/q1c7bnb3b.css';
import '../../css/y/yyq4rabvd.css';
import '../../css/c/cpsecdbjg.css';
import '../../css/e/e8ld0tb4r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rewu6ohdz"/><path class="a3eg0vgxg"/><path class="jr9qsfbkg"/><path class="dmpeb_btt"/><path class="q1c7bnb3b"/><path class="yyq4rabvd"/><path class="cpsecdbjg"/><path class="e8ld0tb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:leaf-fluttering-in-wind"} {...others} />);
}

export default Component;
