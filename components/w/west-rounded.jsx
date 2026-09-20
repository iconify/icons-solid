import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mul-yxhha {
  fill: currentColor;
  d: path("M4.902 12.48h15.617q.214 0 .357-.142t.143-.357t-.143-.357t-.357-.143H4.883L9.68 6.677q.14-.14.143-.341q.003-.202-.143-.348q-.14-.14-.344-.14t-.345.14l-5.427 5.428q-.13.13-.183.267q-.053.136-.053.298t.053.308t.184.277l5.426 5.426q.14.14.342.14q.2 0 .347-.14q.165-.146.156-.356q-.01-.211-.156-.357z");
}
</style><path class="mul-yxhha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:west-rounded"} {...others} />);
}

export default Component;
